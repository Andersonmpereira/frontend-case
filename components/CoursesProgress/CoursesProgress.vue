<template>
    <div class="divider"></div>
    <div class="coursesProgress">
        <CoursesProgressPie 
            :status="status"
        />
        <div class="content-courses">
            <CoursesProgressInfo 
                :status="status"
            />
        </div>
    </div>
</template>

<script setup>
    const status = true
</script>