<template>
  <tr>
    <td>{{ haditsData ? haditsData.id : 'not found'}}</td>
    <td>{{ haditsData ? haditsData.name : 'not found'}}</td>
    <td>{{ haditsData ? haditsData.available : 'not found'}}</td>
  </tr>
</template>

<script>
export default {
  name: "tableHadits",
  props: ["haditsData"],
};
</script>

<style>
</style>