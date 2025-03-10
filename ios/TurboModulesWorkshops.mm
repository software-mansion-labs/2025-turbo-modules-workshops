#import "TurboModulesWorkshops.h"

@implementation TurboModulesWorkshops
RCT_EXPORT_MODULE()

- (NSNumber *)multiply:(double)a b:(double)b
{
  NSNumber *result = @(a * b);
  return result;
}

- (NSString *)passString:(NSString *)str
{
  return [NSString stringWithFormat:@"%@ %@", str, @("new string")];
}

- (NSArray<NSNumber *> *)passArray:(NSArray *)arr
{
  NSMutableArray *mutableArray = [arr mutableCopy];
  [mutableArray addObject:@(5)];
  return mutableArray;
}

- (NSDictionary *)passObject:(JS::NativeTurboModulesWorkshops::CustomObject &)obj
{
  NSMutableDictionary *dictionary = [NSMutableDictionary new];
  dictionary[@("index")] = @(obj.index() + 1);
  dictionary[@("data")] = [NSString stringWithFormat:@"%@ %@", obj.data(), @("new string")];
  return dictionary;
}

- (void)passFunction:(RCTResponseSenderBlock)cb
{
  cb(@[@(5)]);
}

- (void)getPromise:(NSString *)data
           resolve:(RCTPromiseResolveBlock)resolve
            reject:(RCTPromiseRejectBlock)reject
{
  resolve(@[[NSString stringWithFormat:@"%@ %@", data, @("new string")]]);
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeTurboModulesWorkshopsSpecJSI>(params);
}

- (id)init
{
  if (self = [super init]) {
    [[UIDevice currentDevice] beginGeneratingDeviceOrientationNotifications];
    [[NSNotificationCenter defaultCenter]
       addObserver:self selector:@selector(orientationChanged:)
       name:UIDeviceOrientationDidChangeNotification
       object:[UIDevice currentDevice]];
  }
  return self;
}

- (void) orientationChanged:(NSNotification *)note
{
  [self emitOnScreenOrientationChange:[self getScreenOrientation]];
}

- (NSString *)getScreenOrientation
{
  auto orientation = [UIDevice currentDevice].orientation;
  switch (orientation) {
    case UIDeviceOrientationPortrait:
    case UIDeviceOrientationPortraitUpsideDown:
    case UIDeviceOrientationFaceUp:
    case UIDeviceOrientationFaceDown:
      return @"VERTICAL";
    case UIDeviceOrientationLandscapeLeft:
    case UIDeviceOrientationLandscapeRight:
      return @"HORIZONTAL";
    default:
      return @"UNKNOWN";
  }
}

@end
