$(document).ready(function() {
  $(".ro").fadeTo(1,1)
  .hover( 
    function(){// �}�E�X�I�[�o�[��
      $(this).fadeTo("4000", 0.2);//4�b������20%�̓����x�ɂȂ�B
    },
    function(){// �}�E�X�A�E�g��
      $(this).fadeTo("3500", 1);//3.5�b������100%�̓����x�ɖ߂��B
    }
  );
});