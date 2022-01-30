import i18next from 'i18next'
import { initReactI18next } from "react-i18next"

const resources = {
  th: {
    translation: {
      "Welcome to React": "ยินดีต้อนรับ React et react-i18next",
      "login": "เข้าสู่ระบบ" ,
      "mobile-number" : "เบอร์ผู้ใช้",
      "password" : "รหัสผ่าน",
      "forget-password" : "ลืมรหัสผ่าน",
      "register" : "สมัครสมาชิก",
      "otp-header" : "ส่งข้อความ OTP",
      "mobile-number2" : 'หมายเลขโทรศัพท์' ,
      "confirmOtpTitle": "กรุณากรอกรหัส OPT จาก SMS ",
      "fill-mobile-number" : 'ใส่หมายเลขโทรศัพท์' ,
      "fill-otp" : 'ใส่รหัส OTP 6 หลัก',
      "req-otp-again" : 'ขอรหัส OTP อีกครั้งในอีก',
      "set-password": 'ตั้งรหัสผ่านใหม่',
      "confirm-password" : 'ยืนยันรหัสผ่านใหม่' ,
      "otpMin": "OTP ต้องมีอย่างน้อย 6 หลัก",
      "requireOtp": "กรุณากรอกรหัส OTP",
      "confirm" : 'ยืนยัน',
      "back" : 'กลับ',
      "mobile-min": 'ต้องเป็นหมายเลขโทรศัพท์ 10 หลัก',
      "requireMobile": 'กรุณากรอกหมายเลขโทรศัพท์',
      "requirePassword": 'กรุณากรอกหรัสผ่าน',
      "matchPassword": 'รหัสผ่านทั้งสองต้องเหมือนกัน',
      "minPassword": "กรุณากรอกรหัสผ่านมากว่า 8 ตัว",
      "loginFailed": 'เข้าสู่ระบบไม่สำเร็จ...',
      "loginFailedMessage": 'โปรดตรวจสอบหมายเลขโทรศัพท์มือถือและรหัสผ่านของคุณให้ถูกต้อง',
      "otpSendMessage": "ส่ง OTP ไปที่หมายเลข ",
      "pleaseCheckSMS": " โปรดตรวจสอบข้อความของท่าน",
      "otpTitile": "การส่งข้อความ OTP",
      "otpPassswordTitile": "ตั้งรหัสผ่านใช้งานใหม่",
      "passportNo": "หมายเลขบัตรประชาชน",
    }
  },
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "login": "Login" ,
      "mobile-number" : "Mobile Number",
      "password" : "Password",
      "forget-password" : "Forget Password",
      "register" : "Register",
      "otp-header" : "Send SMS OTP",
      "mobile-number2" : 'Mobile number',
      "confirmOtpTitle": "Please enter OPT from SMS ",
      "fill-otp" : 'Fill OTP number 6 digits',
      "req-otp-again" : 'Request OTP again',
      "set-password": 'Set New Password',
      "confirm-password" : 'Confirm New Password' ,
      "otpMin": "OTP must be at least 6 digits",
      "requireOtp": "Please Enter OTP Nummber",
      "confirm" : 'Confirm',
      "back" : 'Back',
      "mobile-min": 'Mobile Number must be 10 digits',
      "requireMobile": "Please enter Mobile Number",
      "requirePassword": 'Please enter Password',
      "matchPassword": 'Passwords must match',
      "minPassword": "Password must be 8 digits",
      "loginFailed": 'Login Failed ...',
      "loginFailedMessage": 'please check your mobile number and your password correct',
      "otpSendMessage": "Send OTP to mobile number ",
      "pleaseCheckSMS": " please check your SMS",
      "otpTitile": "Send Message OTP",
      "otpPassswordTitile": "Enter new password",
       "match": 'Passwords must match',
      "passportNo": "Passport Number",
      
    }
  },
}

i18next
  .use(initReactI18next)
  .init({
    resources,
    compatibilityJSON: 'v3',
    lng: "th",
    fallbackLng: "th",
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
