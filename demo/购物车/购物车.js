// 入口函数；
$(function() {
  /**
   * @param {*全选的按钮类名} allSelected
   * @param {*子项的按钮类名} oneSelected
   */
  // 全选按钮选中函数
  function isSelected(allSelected, oneSelected) {
    $(allSelected).click(function() {
      //获取全选按钮checked状态；
      const state = $(this).prop('checked')
      //设置子项按钮的状态；
      $(oneSelected).prop('checked', state)
      
      //全选加背景；
      if (state == true) {
        $('.middle ul > li').addClass('bgc')
      } else {
        $('.middle ul > li').removeClass('bgc')
      }
    })
  }

  // 调用按钮选中函数
  isSelected('.allSelected', '.oneSelected')


  function singleSelected(oneSelected) {
      
  }

  // 获取全选的子项按钮并注册点击事件；=========================单选！
  $('.oneSelected').click(function() {
    //开关思想；
    var key_ = true
    $('.oneSelected').each(function(index, item) {
      //转换为jQuery对象；
      var state = $(item).prop('checked')
      //判断：只要有一个按钮不成立，则全选按钮不选中；
      if (!state) {
        $('.allSelected').prop('checked', state)
        key_ = state
      }
      $('.allSelected').prop('checked', key_)
    })
    //获取当前的按钮checkbox属性值；
    var key = $(this).prop('checked')
    //判断当前按钮的选中状态；
    if (key == true) {
      //给当前按钮的父元素添加类样式；
      $(this)
        .parent()
        .addClass('bgc')
    } else {
      $(this)
        .parent()
        .removeClass('bgc')
    }
  })

  //实现：加减数量；===========================================数量！
  //给加按钮注册点击事件；
  $('.middle .num :last-child').click(function() {
    var text = $(this)
      .siblings('input')
      .val()
    text++
    //修改属性值；
    $(this)
      .siblings('input')
      .val(text)
    //获取小计的属性值；
    var xiaoji = $(this)
      .parent()
      .prev()
      .text()
    //修改属性值；总价=数量*单价；
    var sum = xiaoji * text
    $(this)
      .parent()
      .next()
      .text(sum.toFixed(2))
    f_sum()
  })

  //给减按钮注册点击事件；
  $('.middle .num :first-child').click(function() {
    var text = $(this)
      .siblings('input')
      .val()
    text--
    //判断当小于等于1时，数量不在变化；
    if (text < 1) {
      $(this)
        .siblings('input')
        .val(1)
    } else {
      //修改属性值；
      $(this)
        .siblings('input')
        .val(text)
      //获取小计的属性值；
      var xiaoji = $(this)
        .parent()
        .prev()
        .text()
      //修改属性值；总价=数量*单价；
      var sum = xiaoji * text
      $(this)
        .parent()
        .next()
        .text(sum.toFixed(2))
    }
    f_sum()
  })

  //当用户手动填写文本域时，价格也应发生变化；===================手动！
  $('.box .num input').change(function() {
    //获取数量；
    var text = $(this).val()
    //获取单价；
    var price = $(this)
      .parent()
      .prev()
      .text()
    //计算总价；
    var sum = text * price
    //修改属性值；
    $(this)
      .parent()
      .next()
      .text(sum.toFixed(2))
    f_sum()
  })

  //计算总数量和总价；=========================================总价！
  function f_sum() {
    //定义变量；
    var sum_1 = 0 //计算总数量；
    var sum_2 = 0 //计算总价格；
    //计算总数量；
    //获取所有的文本内容；
    $('.box .num input').each(function(index, item) {
      var text = $(item).val()
      sum_1 += parseInt(text)
    })
    //修改总数量；
    $('.box .bottom :nth-child(4) strong').text(sum_1)
    //获取所有的小计的文本内容；
    $('.middle li > span:nth-of-type(2)').each(function(index, item) {
      var text = $(item).text()
      sum_2 += parseFloat(text)
    })
    //修改总价；
    $('.box .bottom :nth-child(5) strong').text(sum_2.toFixed(2))
  }

  //添加删除；=================================================删除！
  //获取删除元素对象,并注册点击对象；
  $('.box .middle a').click(function() {
    //获取当前点击对象的父元素；
    $(this)
      .parent('li')
      .remove()
    f_sum()
  })

  //删除选中的商品；
  //获取删除元素对象,并注册点击对象；
  $('.box .bottom >span:nth-of-type(1)').click(function() {
    //获取所有的子项按钮的状态；
    // $('.box .middle input').each(function (index, item) {
    //     var state = $(item).prop('checked');
    //     //判断所有的按钮的选中状态；若为选中则删除；
    //     if (state == true) {
    //         $(item).parent('li').remove();
    //     }
    // });
    //匹配所i有的被选中的元素；
    $('.box .middle input:checked')
      .parent()
      .remove()
    // console.log($('.box .middle input:checked'));
    // console.log($('.box .middle input:checked').parent());
    f_sum()
  })

  //清空购物车；==========================================清空购物车！
  //获取删除元素对象,并注册点击对象；
  $('.box .bottom >span:nth-of-type(2)').click(function() {
    //获取所有的Li并删除；
    $('.box .middle ul').empty()
    f_sum()
  })
})
