/**
 * Created by Spencer Searle on 8/2/24.
 */

package com.rnexample.MMKVBG

import android.R
import android.content.Context
import android.util.Log
import androidx.work.Worker
import androidx.work.WorkerParameters
import com.tencent.mmkv.MMKV
import kotlinx.coroutines.delay
import java.time.Duration
import java.util.Date
import kotlin.time.ExperimentalTime
import kotlin.time.measureTime

class DataSavingWorker(context: Context, workerParams: WorkerParameters): Worker(context,
                                                                                 workerParams
) {
    init {
        MMKV.initialize(context)
    }
    private val storage by lazy { MMKV.defaultMMKV()}
    val name = "Test";
    val age = 20;
    val info = false;
    @OptIn(ExperimentalTime::class)
    override fun doWork(): Result {
        val time = measureTime {
            for (i in 1..100_000) {
                storage.encode("user.name", name)
                storage.encode("user.age", age)
                storage.encode("user.name", name + '1'.code)
                storage.encode("user.age", age + 1)
            }
            storage.encode("is-mmkv-fast-asf", info)
        }
        Log.d(javaClass.name, "DONE: $time")
        return Result.success()
    }
}