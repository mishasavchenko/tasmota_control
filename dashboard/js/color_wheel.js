const pickr3 = new Pickr({
  el: '#color-picker-3',
  useAsButton: true,
  default: "303030",
  components: {
    preview: true,
    opacity: true,
    hue: true,

    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: true,
      save: true
    }
  },

  onChange(hsva, instance) {
    $('.bg-color').css('background-color', hsva.toRGBA().toString());
  }
});

const pickr4 = new Pickr({
  el: '#color-picker-4',
  default: "303030",
  useAsButton: true,
  components: {
    preview: true,
    opacity: true,
    hue: true,

    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: true,
      save: true
    }
  },

  onChange(hsva, instance) {
    $('.text-color').css('color', hsva.toRGBA().toString());
  }
});
