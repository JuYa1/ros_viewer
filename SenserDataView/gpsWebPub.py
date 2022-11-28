import rosbag
import roslibpy
import time
from threading import Thread


class Converter():
    def __init__(self):
        conver = roslibpy.Ros(host='localhost', port=9090)
        conver.run()
        talker = roslibpy.Topic(conver, '/chatter', 'std_msgs/String')
        test_bagfile = '/home/soju/snslab/gps.bag'
        self.bag_file = rosbag.Bag(test_bagfile)
        read_topic = '/ublox/fix'
        cnt = 0
        for topic, msg, t in self.bag_file.read_messages(read_topic):
            cnt += 1
            if cnt < 1000:
                continue
            O_latitude = msg.latitude
            O_longitude = msg.longitude

            a = str(O_latitude)
            b = str(O_longitude)

            c = a + ' ' + b

            if conver.is_connected:
                talker.publish(roslibpy.Message({'data': c}))
                print(c)
                print('Sending message...')

                time.sleep(0.125)


        talker.unadvertise()
        conver.terminate()


if __name__=="__main__":
    Converter()