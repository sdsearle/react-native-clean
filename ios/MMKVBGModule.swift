//
//  MMKVModule.swift
//  RNExample
//
//  Created by Spencer Searle on 8/5/24.
//

import React
import MMKV

@objc(MMKVBGModule)
class MMKVBGModule: NSObject {
  let mmkv = MMKV.default()
  
  @objc func saveDataBG(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    Logger().debug("Starting")
    let bgTaskIdentifier = UIApplication.shared.beginBackgroundTask(withName: "saveDataBGTask", expirationHandler: <#T##(() -> Void)?#>)
    
    DispatchQueue.global(qos: <#T##DispatchQoS.QoSClass#>).async {
      for (i in 1..100_000) {
        mmkv.set(name, forKey: "user.name")
        mmkv.set(age, forKey: "user.age")
        mmkv.set(name + '1'.code, forKey: "user.name")
        mmkv.set(age + 1, forKey: "user.age")
                  }
      mmkv.set(info, forKey: "is-mmkv-fast-asf" )
      UIApplication.shared.endBackgroundTask(bgTaskIdentifier)
    }
    resolve(nil)
  }
  
}
