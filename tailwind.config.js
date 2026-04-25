module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bw0: "#F2F2F2",
        bw1: "#FFFFFF",
        bw2: "#F9F9F9",
        bw3: "#F0F0F0",
        bw4: "#DADADA",
        bw5: "#D6D6D6",
        bw6: "#888888",
        bw7: "#707070",
        bw8: "#333333",
      },

      fontFamily: {
        sans: ["Open Sauce One", "system-ui", "sans-serif"],
        display: ["Poltawski Nowy", "serif"],
      },

      fontSize: {
        "body-b7": ["10px", { lineHeight: "20px", fontWeight: "400" }],
        "body-b6": ["12px", { lineHeight: "22px", fontWeight: "400" }],
        "body-b5": ["14px", { lineHeight: "24px", fontWeight: "400" }],
        "body-b4": ["16px", { lineHeight: "26px", fontWeight: "400" }],
        "body-b3": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-b2": ["20px", { lineHeight: "30px", fontWeight: "400" }],
        "body-b1": ["22px", { lineHeight: "32px", fontWeight: "400" }],

        "body-s4": ["10px", { lineHeight: "20px", fontWeight: "600" }],
        "body-s3": ["12px", { lineHeight: "22px", fontWeight: "600" }],
        "body-s2": ["14px", { lineHeight: "24px", fontWeight: "600" }],
        "body-s1": ["16px", { lineHeight: "26px", fontWeight: "600" }],

        "heading-l2": ["24px", { lineHeight: "34px", fontWeight: "600" }],
        "heading-l1": ["32px", { lineHeight: "42px", fontWeight: "600" }],

        "body-h8b": ["18px", { lineHeight: "28px", fontWeight: "700" }],
        "body-h8": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-h7": ["20px", { lineHeight: "30px", fontWeight: "400" }],
        "body-h6b": ["24px", { lineHeight: "34px", fontWeight: "700" }],
        "body-h6": ["24px", { lineHeight: "34px", fontWeight: "400" }],
        "body-h5": ["26px", { lineHeight: "36px", fontWeight: "400" }],
        "body-h4": ["32px", { lineHeight: "42px", fontWeight: "400" }],
        "body-h3": ["42px", { lineHeight: "52px", fontWeight: "400" }],
        "body-h2": ["54px", { lineHeight: "64px", fontWeight: "400" }],
        "body-h1": ["58px", { lineHeight: "68px", fontWeight: "400" }],

        "heading-h8": ["18px", { lineHeight: "28px", fontWeight: "600", letterSpacing: "-1px", }],
        "heading-h6": ["22px", { lineHeight: "32px", fontWeight: "600", letterSpacing: "-1px", }],
        "heading-h5": ["24px", { lineHeight: "34px", fontWeight: "600", letterSpacing: "-1px", }],
        "heading-h4": ["32px", { lineHeight: "42px", fontWeight: "600", letterSpacing: "-1px", }],
        "heading-h3": ["36px", { lineHeight: "46px", fontWeight: "600", letterSpacing: "-1px", }],
        "heading-h2": ["42px", { lineHeight: "52px", fontWeight: "600", letterSpacing: "-1px", }],
        "heading-h1": ["72px", { lineHeight: "82px", fontWeight: "600", letterSpacing: "-1px", }],
      },

      spacing: {
        5: "5px",
        10: "10px",
        15: "15px",
        20: "20px",
        25: "25px",
        30: "30px",
        45: "45px",
        60: "60px",
        82: "82px",
        90: "90px",
        120: "120px",
        180: "180px",
      },

      keyframes: {
        lineLoop: {
          "0%":   { transform: "scaleX(0)", transformOrigin: "left" },
          "40%":  { transform: "scaleX(1)", transformOrigin: "left" },
          "60%":  { transform: "scaleX(1)", transformOrigin: "left" },
          "60.01%": { transform: "scaleX(1)", transformOrigin: "right" },
          "100%": { transform: "scaleX(0)", transformOrigin: "right" },
        },
        arrowBounceLoop: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "60%": {
            transform: "translateY(12px)",
            opacity: "0",
          },
          "61%": {
            transform: "translateY(-12px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        arrowDiagonalLoop: {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "1",
          },
          "60%": {
            transform: "translate(8px, -8px)", // kanan + atas
            opacity: "0",
          },
          "61%": {
            transform: "translate(-8px, 8px)", // reset dari kiri bawah
            opacity: "0",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "1",
          },
        },
      },

      animation: {
        lineLoop: "lineLoop 2.5s infinite",
        arrowBounceLoop: "arrowBounceLoop 2.5s ease-in-out infinite",
        arrowDiagonalLoop: "arrowDiagonalLoop 2.5s ease-in-out infinite",
      },

    },
  },
  plugins: [],
};
