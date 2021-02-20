## TODO

### Performance
- [ ] Fix striping issue (unable to strip...)

### Errors & Bugs
- [x] Routes should be reset after sending texts.
- [ ] (Minor) If users don't have any contacts, error says 'filter of undefined...'
- [x] Unify cards views.

### Features
- [ ] Publish on AppStore
  - [x] Make iOS version.
  - [ ] Improve Back Button in RegisterScreen. (I think removing names will be enough)
  - [ ] Improve buttons and fonts. (Do this after reflecting design feedbacks on Android version first)
  - [ ] Crash when reading contacts.
- [ ] Add a feature to assign 'Sender's name' such as 1004.
- [ ] Show maximum two numbers when a user's friend has more than one numbers.
- [ ] Enable voice mail.
- [ ] Use push notification for users who have apps.

## Completed

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
- [x] Publish to PlayStore.
- User feedback:
  - [x] Improve search screen.
    - [x] Replace dummy status with real one.
      - [x] Make an API call to check if the friend's number is in the Database.
- Improve MyPage:
  - [x] Describe how to find out who sent the message to the user.
- [x] Complete SettingsScreen.
- [x] Enable Logout.
- [x] Understand when and why to use JSON through HTTP.
- [x] Build apk file properly. (somehow it works now... maybe because I tried to reduce the size?)
- [x] Reduce file size
- [x] Find why the app crashes.
  - [x] Manually installed APK is okay.
  - [x] Connected device is okay.
  - [x] Virtual machine is okay.
  - [x] Downloaded apk is okay.
  - [x] Downloaded aab is NOT okay. Why? (don't know, but apk is okay.)
- [x] Feedback:
  - [x] Route the user after sending the text with explanation and expectation.
  - [x] Alert "If the receiver sends you any text, you'll find him/her in 'counter-signal' tab."
  - [x] Format date and time as relative time.
  - [x] Let users know their number will be opened after 50 days.
  - [x] Use darker color.
  - [x] Reverse order of Signal Cards.
  - [x] Apply local time.
