# Bondhu AI

Bangladesh-first AI chat frontend: React + Vite + Tailwind + PWA + Capacitor Android wrapper.

## Backend

Default API:
`https://bondhu-ai-backed-beta26.onrender.com`

You can override it at build time with `VITE_API_BASE_URL`.

## Web / PWA

```bash
npm ci
npm run dev
npm run build
```

## Android locally

```bash
npm ci
npm run build
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

The APK will be at:
`android/app/build/outputs/apk/debug/app-debug.apk`

## GitHub Actions — phone-friendly APK build

1. Create a GitHub repository.
2. Upload this entire project.
3. Push to the `main` branch, or open **Actions → Build Bondhu AI APK → Run workflow**.
4. Wait for the workflow to finish.
5. Open the completed workflow run and download the **bondhu-ai-apk** artifact.
6. Extract it and install `bondhu-ai.apk` on Android.

The workflow creates the Android Capacitor project during the build, so the repository stays small and you do not need Android Studio.

## Notes

- No API keys are stored in the frontend.
- The backend URL is public configuration.
- The Android wrapper uses HTTPS and the same frontend build as the PWA.
- Debug APKs are unsigned and intended for personal/testing installs. Play Store release builds should use a keystore and signed release/AAB workflow.
