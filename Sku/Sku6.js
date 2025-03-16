// 课表换位
var huanwei_class_name4;

function enableDragAndDrop4(className3) {
    var draggies = document.querySelectorAll('.' + className3);
    console.log(draggies);

    huanwei_class_name4 = className3;

    // 移除已存在的拖拽相关事件监听器
    draggies.forEach(function(draggie) {
        draggie.removeEventListener('dragstart', handleDragStart4);
        draggie.removeEventListener('dragover', handleDragOver4);
        draggie.removeEventListener('drop', handleDrop4);
        draggie.removeEventListener('dragend', handleDragEnd4);
    });

    // 重新添加事件监听器
    draggies.forEach(function(draggie) {
        draggie.addEventListener('dragstart', handleDragStart4, false);
        draggie.addEventListener('dragover', handleDragOver4, false);
        draggie.addEventListener('drop', handleDrop4, false);
        draggie.addEventListener('dragend', handleDragEnd4, false);

    });

}

var draggedItem3 = null;
var sfwuxiao3 = 0;

function handleDragStart4(e) {
    draggedItem3 = this;
    e.dataTransfer.effectAllowed = 'move';

    su_biao.style.display = 'none';


    var parent3 = draggedItem3.parentNode;
    dragIndex222 = Array.prototype.indexOf.call(parent3.children, draggedItem3);
    dropIndex222 = Array.prototype.indexOf.call(parent3.children, this);

    sfwuxiao3 = 0;
}

function handleDragOver4(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (draggedItem3 !== this) {
        // 交换两个元素的位置
        var parent3 = draggedItem3.parentNode;
        var dragIndex2 = Array.prototype.indexOf.call(parent3.children, draggedItem3);
        var dropIndex2 = Array.prototype.indexOf.call(parent3.children, this);
        dropIndex222 = Array.prototype.indexOf.call(parent3.children, this);
        if (dragIndex2 < dropIndex2) {
            var qb = parent3.querySelectorAll('.' + huanwei_class_name4);
            parent3.insertBefore(qb[dragIndex2], qb[dropIndex2].nextElementSibling);
        } else {
            var qb = parent3.querySelectorAll('.' + huanwei_class_name4);
            parent3.insertBefore(qb[dragIndex2], qb[dropIndex2]);
        }
    }
}

function handleDrop4(e) {
    e.stopPropagation();

    su_biao.style.transform = 'scale(1)';

    sfwuxiao3 = 1;
}

function handleDragEnd4(e) {

    su_biao.style.transform = 'scale(1)';


    if (sfwuxiao3 == 0) {
        var parent3 = draggedItem3.parentNode;
        var dragIndex2 = dropIndex222;
        var dropIndex2 = dragIndex222;
        if (dragIndex2 < dropIndex2) {
            var qb = parent3.querySelectorAll('.' + huanwei_class_name4);
            parent3.insertBefore(qb[dragIndex2], qb[dropIndex2].nextElementSibling);
        } else {
            var qb = parent3.querySelectorAll('.' + huanwei_class_name4);
            parent3.insertBefore(qb[dragIndex2], qb[dropIndex2]);
        }
    } else {
        // 最后交换两个元素的位置
        var parent3 = draggedItem3.parentNode;
        dropIndex222 = Array.prototype.indexOf.call(parent3.children, this);
        console.log(dragIndex222, dropIndex222);

    }


    draggedItem3 = null;

}
enableDragAndDrop4('sy_ke_biao_h');