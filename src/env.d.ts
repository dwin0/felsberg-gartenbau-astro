/// <reference types="astro/client" />

interface Window {
  validateForm: Function;
  grecaptcha: {
    getResponse: () => Boolean;
  };
}
