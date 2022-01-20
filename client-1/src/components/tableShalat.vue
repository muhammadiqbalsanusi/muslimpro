<template>
  <tr>
    <td>{{ dataShalat ? dataShalat.tanggal : 'not found'}}</td>
    <td>{{ dataShalat ? dataShalat.imsak : 'not found'}}</td>
    <td>{{ dataShalat ? dataShalat.subuh : 'not found'}}</td>
    <td>{{ dataShalat ? dataShalat.dhuha : 'not found'}}</td>
    <td>{{ dataShalat ? dataShalat.dzuhur : 'not found'}}</td>
    <td>{{ dataShalat ? dataShalat.ashar : 'not found'}}</td>
    <td>{{ dataShalat ? dataShalat.maghrib : 'not found'}}</td>
    <td>{{ dataShalat ? dataShalat.isya : 'not found'}}</td>
  </tr>
</template>

<script>
export default {
  name: "tableShalat",
  props: ["dataShalat"],
};
</script>

<style>
</style>