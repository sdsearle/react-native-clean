/**
 * Created by Spencer Searle on 8/2/24.
 */

package com.rnexample.MMKVBG

import android.os.Build
import android.util.Log
import androidx.annotation.RequiresApi
import androidx.work.OneTimeWorkRequestBuilder
import androidx.work.WorkManager
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.rnexample.MainApplication
import java.time.Duration

class MMKVBGModule(val context: ReactApplicationContext) :
    ReactContextBaseJavaModule() {
    override fun getName(): String {
        return "MMKVBGModule"
    }

    @ReactMethod
    @RequiresApi(Build.VERSION_CODES.O)
    fun saveDataBG(promise: Promise){
        val workRequest = OneTimeWorkRequestBuilder<DataSavingWorker>()
            .setInitialDelay(Duration.ofSeconds(5))
            .build()
        //.setInputData()
        WorkManager.getInstance(context).enqueue(workRequest)
        promise.resolve(null)
    }
}