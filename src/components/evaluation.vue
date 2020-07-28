<script>
import PhotoClass from '@/PhotoClass';
export default {
    name: "Evaluation",
    props: {
        photoID: Number,
        checkedClasses: PhotoClass
    },
    data() {
      return {
        agreed: false,
        disagreed: false
      };
    },
}
</script>