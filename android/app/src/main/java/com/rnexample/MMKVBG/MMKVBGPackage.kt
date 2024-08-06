/**
 * Created by Spencer Searle on 8/2/24.
 */

package com.rnexample.MMKVBG

import android.R.attr.name
import android.view.View
import androidx.work.OneTimeWorkRequestBuilder
import androidx.work.WorkManager
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager
import com.tencent.mmkv.MMKV


class MMKVBGPackage: ReactPackage {
        override fun createNativeModules(context: ReactApplicationContext): MutableList<NativeModule> {
            return mutableListOf(MMKVBGModule(context))
        }

        override fun createViewManagers(p0: ReactApplicationContext): MutableList<ViewManager<View, ReactShadowNode<*>>> {
            return mutableListOf()
        }
}