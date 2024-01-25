 <template>
   <div>
      <SchoolName/>
      <StudentName name="萧炎" :age="18" sex="男"/>
   </div>
 </template>
 
 <script>
import SchoolName from './components/SchoolName.vue';
import StudentName from './components/StudentName.vue';
 export default {
     name: "App",
     components: {
        SchoolName,
        StudentName,
    },
 }
 </script>
 
 <style>
 
 </style>