<template>
    <div class="divider"></div>
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