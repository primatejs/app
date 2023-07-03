export default {
  async get({store}) {
    const {User} = store;
    await User.delete();
    const user = await User.insert({date: new Date(), age: 200});
    console.log(user);
//    user.age = 40;
 //   const user2 = await User.update({id: user.id}, user);
  //  console.log("user2", user2);

  //  console.log(await User.find());

    /*return {
      user: await User.new(),
      users: await User.find(),
    };*/
    return "Test";
  },
};
