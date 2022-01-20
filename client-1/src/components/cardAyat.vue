<template>
       <!-- <div> -->
   <tr>
      <th scope="row">{{ surahOneData.nomor }}</th>
      <td>
         <p class="text-right h2">
          {{ surahOneData.ar }}
         </p>
         <p class="text-left"><em>
          {{ surahOneData.id }}</em>
         </p>

      </td>
      <!-- <td>audio</td> -->
    </tr>
       <!-- </div> -->
</template>

<script>
export default {
    name : 'CardQuran',
    props : ['surahOneData']
}
</script>

<style>

</style>