<template>
    <div class="card div1">
        <div class="heading">
            <div class="title">
                <Icon class="icon" name="ri:timer-flash-line"/>
                <h3>Rastreador de tempo</h3>
            </div>
            <slot/>
            <button class="btn btn-outline">
                <Icon class="icon" name="ri:history-line"/>
                Histórico
            </button>
        </div>
    </div>
    <div class="columm">
        <div class="card div2">
            <div class="title">
                <Icon class="icon" name="ri:calendar-check-line"/>
                <h3>Titulo</h3>
                <button class="btn btn-outline">
                    <Icon class="icon" name="ri:calendar-check-line"/>
                    Calendário
                </button>
            </div>
            <slot />
        </div>
        <div class="card div3">
            <div class="title">
                <Icon class="icon" name="ri:calendar-check-line"/>
                <h3>Titulo</h3>
                <button class="btn btn-outline">
                    <Icon class="icon" name="ri:calendar-check-line"/>
                    Calendário
                </button>
            </div>
        </div>
    </div>
    <div class="card div4">
        <div class="title">
            <Icon class="icon" name="ri:calendar-check-line"/>
            <h3>Titulo</h3>
            <button class="btn btn-outline">
                <Icon class="icon" name="ri:calendar-check-line"/>
                Calendário
            </button>
        </div>
    </div>
    <div class="card div5">
        <div class="title">
            <Icon class="icon" name="ri:calendar-check-line"/>
            <h3>Titulo</h3>
            <button class="btn btn-outline">
                <Icon class="icon" name="ri:calendar-check-line"/>
                Calendário
            </button>
        </div>
    </div>
    <div class="card div6">
        <div class="title">
            <Icon class="icon" name="ri:calendar-check-line"/>
            <h3>Titulo</h3>
            <button class="btn btn-outline">
                <Icon class="icon" name="ri:calendar-check-line"/>
                Calendário
            </button>
        </div>
    </div>
</template>