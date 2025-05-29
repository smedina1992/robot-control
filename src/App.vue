<script setup>
const sendCommand = async (direction) => {
  try {
    const response = await fetch('http://192.168.0.11', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ command: direction })
    });
    console.log('Comando enviado:', direction);
  } catch (error) {
    console.error('Error al enviar comando:', error);
  }
};
</script>

<template>
  <router-view></router-view>
</template>

<style>
/* Estilos globales */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}
</style>
