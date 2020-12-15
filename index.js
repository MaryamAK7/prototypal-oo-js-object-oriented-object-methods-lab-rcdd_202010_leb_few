function BoardMember(name, homeState,training){
  this.training = training;
  this.name = name;
  this.training =training;
}

BoardMember.prototype.veto(){
  return 'No, I must disagree'
}

BoardMember.prototype.approve(){
  return 'You can do that!'
}
BoardMember.prototype.doCharity(){
  return 'I like to help people.'
}
BoardMember.prototype.releasePressStatement(){
  return 'I like to help people.'
}