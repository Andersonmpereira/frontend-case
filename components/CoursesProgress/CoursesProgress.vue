<template>
    <hr class="divider">
    <div class="coursesProgress">
        <CoursesProgressPie 
            :mock="mock"
        />
        <div class="content-courses">
            <CoursesProgressInfo 
                :mock="mock"
            />
        </div>
    </div>
</template>

<script setup>
    const mock = true
</script>