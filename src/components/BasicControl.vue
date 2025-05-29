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
    <div class="container">
        <h1>Control de Robot</h1>
        <div class="control-panel">
            <button @click="sendCommand('adelante')" class="control-btn up">
                ↑
            </button>
            <div class="horizontal-controls">
                <button @click="sendCommand('izquierda')" class="control-btn left">
                    ←
                </button>
                <button @click="sendCommand('derecha')" class="control-btn right">
                    →
                </button>
            </div>
            <button @click="sendCommand('atras')" class="control-btn down">
                ↓
            </button>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f0f0f0;
    padding: 2rem;
}

h1 {
    color: #2c3e50;
    margin-bottom: 2rem;
    font-size: 2.5rem;
}

.control-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.horizontal-controls {
    display: flex;
    gap: 2rem;
}

.control-btn {
    width: 120px;
    height: 120px;
    font-size: 2.5rem;
    border: none;
    border-radius: 15px;
    background-color: #42b883;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.control-btn:hover {
    background-color: #3aa876;
    transform: scale(1.05);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.control-btn:active {
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style> 