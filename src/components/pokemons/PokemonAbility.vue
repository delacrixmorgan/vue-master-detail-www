<template>
    <li>
        <p>{{ name }} </p>
         <p><a :href="url">View Details</a></p>
    </li>
</template>

<script>
export default {
    props: ["name", "url"]
}
</script>