## TODO

### Features

- [ ] Enable Korean typing but disable emoji.
- [ ] Reply and chat function.
- [ ] Use push notification for users who have apps.
- [ ] Show maximum two numbers when a user's friend has more than one numbers.
- [ ] Enable using alias.
- [ ] Enable voice mail.

### Errors & Bugs

- [ ] (Minor) If users don't have any contacts, error says 'filter of undefined...'
- [ ] VirtualizedList warning: you have a large list that is slow to update.

## Completed

- [x] Show manner score instead of the profile picture.
- [x] Disallow emoji.
- [x] Hide keyboard by clicking elsewhere.
- [x] Prevent duplicate report.
- [x] Delete messages within 24 hours after reported. (Make a slack alert bot.)
- [x] Splash Screen goes off too early in iPhone.
- [x] 'Reported' should not be seen in 'SentSignals' screen.
- [x] Make people be able to report abusers and suspend abusers.
- [x] Warn senders that abusing reports will lead to a permanent suspension.
- [x] Make iOS version.
  - [x] App Icon
    - [x] Change for Android, too.
  - [x] Splash Screen
    - [x] Need to test on device
- [x] Remove names on back buttons or headers themselves.
- [x] Improve buttons and fonts. (Do this after reflecting design feedbacks on Android version first.)
- [x] Crash when reading contacts.
- [x] Show registered friends first.
- [x] Routes should be reset after sending texts.
- [x] Unify cards views.
- [x] iPhone error: get-users api call fails. Figure out why android and simulators are okay but the iPhone device only fails here.
- [x] Splash screen on iPhone small version doesn't fit.
- [x] Change app name to Korean '누구게.'
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
