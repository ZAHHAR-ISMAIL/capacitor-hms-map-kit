import Foundation

@objc public class MapKit: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
