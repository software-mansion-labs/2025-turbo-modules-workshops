package com.turbomodulesworkshops

import android.content.res.Configuration
import android.view.OrientationEventListener
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.WritableArray
import com.facebook.react.bridge.WritableMap
import com.facebook.react.bridge.WritableNativeArray
import com.facebook.react.bridge.WritableNativeMap
import com.facebook.react.module.annotations.ReactModule


@ReactModule(name = TurboModulesWorkshopsModule.NAME)
class TurboModulesWorkshopsModule(reactContext: ReactApplicationContext) :
  NativeTurboModulesWorkshopsSpec(reactContext) {

  private var orientationEventListener: OrientationEventListener =
    object : OrientationEventListener(currentActivity) {
    override fun onOrientationChanged(rotation: Int) {
      val orientation = if (rotation % 180 == 0) "VERTICAL" else "HORIZONTAL"
      emitOnScreenOrientationChange(orientation)
    }
  }

  init {
    orientationEventListener.enable()
  }

  override fun getName(): String {
    return NAME
  }

  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }

  override fun passString(str: String?): String {
    return "$str new string"
  }

  override fun passArray(arr: ReadableArray?): WritableArray {
    val writableArray: WritableArray = WritableNativeArray()
    writableArray.pushArray(arr)
    writableArray.pushInt(5)
    return writableArray
  }

  override fun passObject(obj: ReadableMap?): WritableMap {
    val writableMap: WritableMap = WritableNativeMap()
    writableMap.putInt("index", obj?.getInt("index")?.plus(1) ?: 0)
    writableMap.putString("data", obj?.getString("data") + " new string")
    return writableMap
  }

  override fun passFunction(cb: Callback?) {
    if (cb != null) {
      cb(5)
    }
  }

  override fun getPromise(data: String?, promise: Promise?) {
    promise?.resolve("$data new string")
  }

  override fun getScreenOrientation(): String {
    val orientation: Int = reactApplicationContext.resources.configuration.orientation
    return if (orientation == Configuration.ORIENTATION_LANDSCAPE) {
      "HORIZONTAL"
    } else {
      "VERTICAL"
    }
  }

  companion object {
    const val NAME = "TurboModulesWorkshops"
  }
}
