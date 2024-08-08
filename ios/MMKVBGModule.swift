//
//  MMKVModule.swift
//  RNExample
//
//  Created by Spencer Searle on 8/5/24.
//

import React
import Foundation

@objc(MMKVBGModule)
class MMKVBGModule: NSObject {
  @objc static func requiresMainQueueSetup() -> Bool {
  return true
  }
  
  var backgroundTask = UIBackgroundTaskIdentifier.invalid
  
  @objc func saveDataBG(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    print("Starting")
    var backgroundTask: UIBackgroundTaskIdentifier? = nil;
    backgroundTask = UIApplication.shared.beginBackgroundTask(withName: "saveDataBGTask", expirationHandler: {
      () -> Void in
      if backgroundTask != UIBackgroundTaskIdentifier.invalid {
                  // Do something to stop our background task or the app will be killed
                  print("Out Of Time")
              }
    })
    let name = "Test";
    let age: Int32 = 20;
    let info = false;
    let qos:DispatchQoS.QoSClass = .background
    print("MMKV Start")
    var mmkv = MMKV.default()
    //    else {
    //      print("MMKV ERROR")
    //      return
    //    }
    print("Dispatching...")
    DispatchQueue.main.asyncAfter(deadline: .now() + 5, execute: {
      for i in 1...100_000 {
        mmkv?.set(name, forKey: "user.name")
        mmkv?.set(age, forKey: "user.age")
        mmkv?.set(name + "1", forKey: "user.name1")
        mmkv?.set(age + 1, forKey: "user.age1")
      }
      mmkv?.set(info, forKey: "is-mm/kv-fast-asf" )
      print("Finished")
      UIApplication.shared.endBackgroundTask(backgroundTask!)
      
      resolve(nil)
    }
    )
  }
  
  func initiateBackgroundTask() -> UIBackgroundTaskIdentifier {
    var identifier: UIBackgroundTaskIdentifier? = nil
    identifier = UIApplication.shared.beginBackgroundTask {
      // Expiration block, perform cleanup including endBackgroundTask
      UIApplication.shared.endBackgroundTask(identifier!)
    }
    return identifier!
  }
  
}
