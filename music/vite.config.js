import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // ¡AÑADE O CORRIGE ESTA LÍNEA!
  base: '/Pr-ctico-Segundo-Cuatrimestre-claro-oscuro/', 
  plugins: [react()],
});