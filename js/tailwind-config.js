// Sahay — shared Tailwind theme config
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#16302B',
        teal: '#1F6F5C',
        tealLight: '#2E8B73',
        gold: '#C9922B',
        goldLight: '#E4B65C',
        paper: '#F8F5EC',
        paper2: '#EFEADA',
        paper3: '#E3DCC6',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['IBM Plex Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      }
    }
  }
}