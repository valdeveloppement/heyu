https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment
https://facebook.github.io/react-native/docs/running-on-device

On installe npm, android studio les sdk (aussi ceux de lollipop pour moi)


On installe react natif:
npm install -g react-native-cli
react-native init ProjectName



On va dans l'app :
 cd ProjectName



On installe la geoloc:
npm install @react-native-community/geolocation --save



On install les peers requis:
npm install -g npm-install-peers
npm-install-peers
npm install typescript
npm install eslint


On install cocoapods, et variables env:
sudo gem install cocoapods
export GEM_HOME=$HOME/.gem
export PATH=$GEM_HOME/bin:$PATH

Paste in : android/app/src/main/AndroidManifest.xml:
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" /> 


lancer react native server:
react-native start

puiis:

react-native run-android


pour build un apk dans /android:
gradlew assembleRelease

pour ouvrior un port:
iptables -A INPUT -p tcp -m tcp --dport 7777 -j ACCEPT # ouvrir le port 777
iptables -D INPUT -p tcp -m tcp --dport 7777 -j ACCEPT # annuler l'ouverture
iptables -L # regarder ce qui est ouvert et ce qui l'est pas

