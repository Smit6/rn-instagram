import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const Post = ({ post, postFooter }) => {
  return (
    <View style={{marginBottom: 30}}>
      <Divider width={1} orientation='vertical' />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{marginHorizontal: 15, marginTop: 10}}>
        <PostFooter post={post} postFooter={postFooter} />
        <Likes post={post}/>
        <Caption post={post}/>
        <CommentsSection post={post}/>
        <Comments post={post} />
      </View>
    </View>
  )
}

const PostHeader = ({post}) => (
  <View style={styles.postHeaderContainer}>
    <View style={styles.user}>
      <Image
        source={{uri: post.profile_picture}}
        style={styles.profilePicture}
      />
      <Text style={styles.username}>
        {post.user}
      </Text>
    </View>
    <Text style={{color: 'white', fontWeight: '900'}}>...</Text>
  </View>
)

const PostImage = ({post}) => (
  <View style={styles.imageView}>
    <Image
      source={{uri: post.imageUrl}}
      style={styles.image}
    />
  </View>
)

const PostFooter = ({post, postFooter}) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} iconUrl={postFooter[0].iconUrl}/>
      <Icon imgStyle={styles.footerIcon} iconUrl={postFooter[1].iconUrl}/>
      <Icon imgStyle={styles.footerIcon} iconUrl={postFooter[2].iconUrl}/>
    </View>
    <View>
      <Icon imgStyle={styles.footerIcon} iconUrl={postFooter[3].iconUrl}/>
    </View>
  </View>
)

const Icon = ({imgStyle, iconUrl}) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{uri: iconUrl}}/>
  </TouchableOpacity>
)

const Likes = ({ post }) => (
  <View style={{flexDirection: 'row', marginTop: 4}}>
    <Text style={{color: 'white', fontWeight: '600'}}>
      {post.likes.toLocaleString('en')} likes
    </Text>
  </View>
)

const Caption = ({ post }) => (
  <View style={{ marginTop: 5}}>
    <Text style={{ color: 'white' }}>
      <Text style={{fontWeight: '600'}}>{post.user}</Text>
      <Text>{' '}{post.caption}</Text>
    </Text>
  </View>
)

const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {
      !!post.comments.length
      && <Text style={{color: 'gray'}}>
        View{post.comments.length > 1 ? ' all': ''} {post.comments.length}{' '}
        {post.comments.length > 1 ? 'comments' : 'comment'}
      </Text>
    }
  </View>
)

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{flexDirection: 'row', marginTop: 5}}>
        <Text style={{color: 'white'}}>
          <Text style={{fontWeight: '600'}}>{comment.user}</Text>
          {' '}{comment.comment}
        </Text>
      </View>
    ))}
  </>
)

const styles = StyleSheet.create({
  postHeaderContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center'
  },
  profilePicture: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501'
  },
  username: {
    color: 'white',
    marginLeft: 5,
    fontWeight: '700'
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: '100%',
    resizeMode: 'cover'
  },
  imageView: {
    width: '100%',
    height: 450
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  leftFooterIconsContainer: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'space-between'
  }
});

export default Post