<script setup>
const sendCommand = async (command) => {
    try {
        const response = await fetch('http://urltestclase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ command: command })
        });
        console.log('Comando enviado:', command);
    } catch (error) {
        console.error('Error al enviar comando:', error);
    }
};
</script>

<template>
    <div class="container">
        <h1>Control Completo del Robot</h1>

        <!-- Panel de Control de Dirección -->
        <div class="control-section">
            <h2>Control de Dirección</h2>
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

        <!-- Panel de Control de Comandos -->
        <div class="control-section">
            <h2>Comandos Especiales</h2>
            <div class="commands-panel">
                <button @click="sendCommand('parar')" class="command-btn stop">
                    Parar
                </button>
                <button @click="sendCommand('tomarfoto')" class="command-btn photo">
                    Tomar Foto
                </button>
                <button @click="sendCommand('empezarstream')" class="command-btn stream">
                    Iniciar Stream
                </button>
                <button @click="sendCommand('pausarstream')" class="command-btn pause">
                    Pausar Stream
                </button>
            </div>
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

h2 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.8rem;
}

.control-section {
    background-color: white;
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    width: 100%;
    max-width: 600px;
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

.commands-panel {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1rem;
}

.command-btn {
    padding: 1rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 10px;
    background-color: #42b883;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.control-btn:hover,
.command-btn:hover {
    background-color: #3aa876;
    transform: scale(1.05);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.control-btn:active,
.command-btn:active {
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.stop {
    background-color: #e74c3c;
}

.stop:hover {
    background-color: #c0392b;
}

.photo {
    background-color: #3498db;
}

.photo:hover {
    background-color: #2980b9;
}

.stream {
    background-color: #9b59b6;
}

.stream:hover {
    background-color: #8e44ad;
}

.pause {
    background-color: #f1c40f;
}

.pause:hover {
    background-color: #f39c12;
}
</style> 