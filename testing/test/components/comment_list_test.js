import {renderComponent,expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('comment list',()=>{
  let component;
  beforeEach(()=>{
    const props = {comments:['comment 1','comment 2','comment 3']};
    component = renderComponent(CommentList,null,props);
  })
  it('list non empty li',()=>{
    expect(component.find('li').length).to.equal(3);
  });

  it('shows the whole list of comments',()=>{
    expect(component).to.contain('comment 1');
    expect(component).to.contain('comment 2');
    expect(component).to.contain('comment 3');
  })
})
