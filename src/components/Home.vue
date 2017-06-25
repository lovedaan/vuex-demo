<template>
    <div class="home">
        <ul class="homelist">
            <li @click="toMovieList('in_theaters')">正在上映</li>
            <li @click="toMovieList('coming_soon')">即将上映</li>
            <li @click="toMovieList('top250')">top205</li>
        </ul>
    </div>
</template>