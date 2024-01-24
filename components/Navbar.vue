<template>
    <span class="divider"></span>
    <nav class="navbar">
        <Menu
            :title="'main'"
        >
            <li class="nav-list active">
                <NuxtLink to="/" class="nav-link">
                    <Icon class="icon" name="ri:layout-grid-line"/>
                    <span class="nav-text">Dashboard</span>
                </NuxtLink>
            </li>
            <li class="nav-list">
                <NuxtLink to="/calendario" class="nav-link">
                    <Icon class="icon" name="ri:calendar-line"/>
                    <span class="nav-text">Calendário</span>                    
                </NuxtLink>
            </li>
            <li class="nav-list">
                <NuxtLink to="/" class="nav-link">
                    <Icon class="icon" name="ri:timer-line"/>
                    <span class="nav-text">Descanso</span>
                </NuxtLink>
            </li>
            <li class="nav-list">
                <NuxtLink to="/" class="nav-link">
                    <Icon class="icon" name="ri:folders-line"/>
                    <span class="nav-text">Projetos</span>
                </NuxtLink>
            </li>
            <li class="nav-list">
                <NuxtLink to="/" class="nav-link">
                    <Icon class="icon" name="ri:group-line"/>
                    <span class="nav-text">Times</span>
                </NuxtLink>
            </li>
            <li class="nav-list">
                <NuxtLink to="/" class="nav-link">
                    <Icon class="icon" name="ri:equalizer-line"/>
                    <span class="nav-text">Integrações</span>                    
                </NuxtLink>
            </li>
            <li class="nav-list">
                <NuxtLink to="/" class="nav-link">
                    <Icon class="icon" name="ri:star-smile-line"/>
                    <span class="nav-text">Beneficios</span>                    
                </NuxtLink>
            </li>
            <li class="nav-list">
                <NuxtLink to="/" class="nav-link">
                    <Icon class="icon" name="ri:file-cloud-line"/>
                    <span class="nav-text">Documentos</span>                    
                </NuxtLink>
            </li>
        </Menu>
        <Menu :title="'Fav'">
            <li class="nav-list">
                <NuxtLink to="/" class="nav-link fav-link">
                    <div class="list-content">
                        <span class="icon blue dot">•</span>
                        <span class="nav-text">Loom Mobile Apps</span>
                    </div>                    
                    <button class="shortcut">⌘ 1</button>                  
                </NuxtLink>
            </li>
            <li class="nav-list">
                <NuxtLink to="/calendario" class="nav-link fav-link">
                    <div class="list-content">
                        <span class="icon red dot">•</span>
                        <span class="nav-text">Monday Redesign</span>
                    </div>                   
                    <button class="shortcut">⌘ 2</button>
                </NuxtLink>
            </li>
            <li class="nav-list">
                <NuxtLink to="/" class="nav-link fav-link">
                    <div class="list-content">
                        <span class="icon pink dot">•</span>
                        <span class="nav-text">Udemy Courses</span>
                    </div>
                    <button class="shortcut">⌘ 3</button>
                </NuxtLink>
            </li>
        </Menu>
        <Menu
            :class="'tools'"
        >
            <li class="nav-list">
                <NuxtLink to="/" class="nav-link">
                    <Icon class="icon" name="ri:settings-2-line"/>
                    <span class="nav-text">Configurações</span>
                </NuxtLink>
            </li>
            <li class="nav-list">
                <NuxtLink to="/" class="nav-link">
                    <Icon class="icon" name="ri:headphone-line"/>
                    <span class="nav-text">Suporte</span>                    
                </NuxtLink>
            </li>
        </Menu>
    </nav>
    <span class="divider"></span>
</template>