//
//  MMKVBGModule.m
//  RNExample
//
//  Created by Spencer Searle on 8/6/24.
//

#import <React/RCTBridgeModule.h>
@interface RCT_EXTERN_MODULE(MMKVBGModule, NSObject)
RCT_EXTERN_METHOD(saveDataBG:(RCTPromiseResolveBlock)resolve
                  rejector:(RCTPromiseRejectBlock)reject)
@end
