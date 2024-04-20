/// <reference types="astro/client" />

interface Window {
  validate_form: Function;
  grecaptcha: {
    getResponse: () => Boolean;
  };
}
