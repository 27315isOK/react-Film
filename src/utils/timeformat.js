export default {
    toWMD(time) {  // 传一个时间戳(秒)(1640908800),然后返回日期格式  周五 12月31日
      const dd = new Date(time * 1000);  //以毫秒单位来创建时间对象
      // console.log(dd.getMonth()+1)
      // console.log(dd.getDate())
      // console.log(dd.getDay())
  
  
      // 得到今天的时间
      const today = new Date();
    
      //把今天的时间设置到明年的1月1日
      today.setFullYear(today.getFullYear()+1)
      today.setMonth(0)
      today.setDate(1)
      today.setHours(0)
      today.setMinutes(0)
      today.setSeconds(0)
  
      // console.log(today.getFullYear())
      // console.log(today.getMonth())
      // console.log(today.getDate())
  
      // console.log(today.getTime())  // 获取到1月1日的时间戳
  
      let w = '';
      switch (dd.getDay()) {
        case 0:
          w = '周日'
          break;
        case 1:
          w = '周一'
          break;
        case 2:
          w = '周二'
          break;
        case 3:
          w = '周三'
          break;
        case 4:
          w = '周四'
          break;
        case 5:
          w = '周五'
          break;
        case 6:
          w = '周六'
          break;
      }
      // console.log(`${w} ${dd.getMonth()+1}月 ${dd.getDate()}日`)
  
      // 如果time和1月1对比,  如果time大于1月1, 就说明明天的时间
  
  
      // console.log(time*1000)
      // console.log(today.getTime())
  
  
      if(time*1000 > today.getTime()){
        // console.log('aaaaaaaaaaaaaaaaa')
        return `${w} ${dd.getFullYear()}年${dd.getMonth()+1}月${dd.getDate()}日`
      }else{
        // console.log('---------------')
        return `${w} ${dd.getMonth()+1}月${dd.getDate()}日`
      }
  
      
      
    },
    toYMD(time){ // 传一个时间戳(秒)(1640908800),然后返回日期格式 2101年12月31日
      const dd = new Date(time * 1000);  
      return `${dd.getFullYear()}年${dd.getMonth()+1}月${dd.getDate()}日`
    },
  
    toTime(time){
      const dd = new Date(time * 1000); 
  
      // let today = new Date();  // 今天的时间
      // today.setDate(today.getDate()+1)
      // today.setHours(0)
      // today.getMinutes(0)
      // today.setSeconds(0)  // today设置成明天0点的时间  (今天的结束点)
      // console.log(dd-today)
      return `${dd.getMonth()+1}月${dd.getDate()}日`
    },
    toHM(time){
      const dd = new Date(time * 1000); 
      return `${dd.getHours()}:${dd.getMinutes()}`
    }
  
  
  }
  
  // module.exports = {}