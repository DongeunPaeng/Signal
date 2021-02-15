### TODO

- [x] Design improvements using glassmorphism.
- [x] Sent signals missing from the screen.
- [x] Make a new screen where matched friends are shown.
- [x] Make Header section white.
- [x] Beautify check-duplicate button.
- [x] Add password, name, email validator.
- [x] Update api calls with the new remote server address.
- [x] FIX: screens are overlapped when navigated. (apk only)
  - [x] Use Wrapper.
    - [x] FIX: header overlapped.
    - [x] FIX: header not fully transparent.
    - [x] FIX: overlay seems strange when keyboard is up.
- [x] FIX: can't get contacts from an Android device. (apk only)
- [x] Search bar text optimization.
- [x] FEEDBACK: prevent uppercase everywhere.
- [x] Prepare publishing.
  - [x] Make Screenshots.
  - [x] Make Splash Image.
- [x] Fix FlatList not to be overlapped.
- [ ] Publish to stores.
  - [x] PlayStore
  - [ ] AppStore
- User feedback:
  - [x] Improve search screen.
    - [x] Replace dummy status with real one.
      - [x] Make an API call to check if the friend's number is in the Database.
  - [ ] Add a feature to assign 'Sender's name' such as 1004.
- Improve MyPage:
  - [x] Describe how to find out who sent the message to the user.
- [x] Complete SettingsScreen.
- [x] Enable Logout.
- [x] Understand when and why to use JSON through HTTP.
- [x] Build apk file properly. (somehow it works now... maybe because I tried to reduce the size?)
- [ ] Show maximum two numbers when a user's friend has more than one numbers.
- [ ] Reduce file size
  - [ ] Fix striping issue (unable to strip...)
- [ ] Find why the app crashes.
  - [x] Manually installed APK is okay.
  - [x] Connected device is okay.
  - [x] Virtual machine is okay.
  - [x] Downloaded apk is okay.
  - [ ] Downloaded aab is NOT okay. Why?
    - [ ] I think it is because of the size. The huge size causes bundling process more difficult. Ant a problem occurs there.

Immediate Next Step:

- Reduce app's size substantially. IMPORTANT!
  - Let's do it before adding any features.
