import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import { images } from '../../constants'

const ProfileNavbar = () => {
  return (
    <TouchableOpacity className=" h-[6vh] items-start flex">
      <Link href="/home" className='h-10  w-10'>
        <Image source={images.back} className="h-8 w-8" />
      </Link>
    </TouchableOpacity>
  )
}

export default ProfileNavbar

