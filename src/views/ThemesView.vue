<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn m-1">
      Тема
      <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
    </div>
    <ul tabindex="5" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('light')" aria-label="Light" value="light"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('dark')" aria-label="Dark" value="dark"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('cupcake')" aria-label="Cupcake" value="cupcake"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('bumblebee')" aria-label="Bumblebee" value="bumblebee"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('emerald')" aria-label="Emerald" value="emerald"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('corporate')" aria-label="Corporate" value="corporate"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('synthwave')" aria-label="Synthwave" value="synthwave"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('retro')" aria-label="Retro" value="retro"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('cyberpunk')" aria-label="Cyberpunk" value="cyberpunk"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('valentine')" aria-label="Valentine" value="valentine"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('halloween')" aria-label="Halloween" value="halloween"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('garden')" aria-label="Garden" value="garden"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('forest')" aria-label="Forest" value="forest"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('aqua')" aria-label="Aqua" value="aqua"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('lofi')" aria-label="Lofi" value="lofi"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('pastel')" aria-label="Pastel" value="pastel"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('fantasy')" aria-label="Fantasy" value="fantasy"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('wireframe')" aria-label="Wireframe" value="wireframe"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('black')" aria-label="Black" value="black"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('luxury')" aria-label="Luxury" value="luxury"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('dracula')" aria-label="Dracula" value="dracula"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('cmyk')" aria-label="Cmyk" value="cmyk"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('autumn')" aria-label="Autumn" value="autumn"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('business')" aria-label="Business" value="business"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('acid')" aria-label="Acid" value="acid"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('lemonade')" aria-label="Lemonade" value="lemonade"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('night')" aria-label="Night" value="night"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('coffee')" aria-label="Coffee" value="coffee"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('winter')" aria-label="Winter" value="winter"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('dim')" aria-label="Dim" value="dim"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('nord')" aria-label="Nord" value="nord"/></li>
      <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" v-model="selectedTheme" @change="setTheme('sunset')" aria-label="Sunset" value="sunset"/></li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    const selectedTheme = localStorage.getItem('selectedTheme');

    if (selectedTheme) {
      this.setTheme(selectedTheme);
    }

    this.$watch('selectedTheme', (newTheme) => {
      localStorage.setItem('selectedTheme', newTheme);
    });
  },
  data() {
    return {
      selectedTheme: '',
    };
  },
  methods: {
    setTheme(theme) {
      this.selectedTheme = theme;
    },
  },
};
</script>