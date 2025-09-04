<template>
        <header class="d-flex justify-content-center py-3">
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <router-link to="/Firelogin" class="nav-link" active-class="active">Firebase Login</router-link>
                </li>
            </ul>
        </header>
        <main class="main-box">
            <router-view></router-view>  
        </main>
</template>