import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {useFindManyUserClassProgress, useUpsertUserClassProgress} from "@/src/lib/db/hooks";
import {useState} from "react";

export default function HomeScreen() {

    const [ userId, setUserId ] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(event.target.value);
    };

  const getUserCLassProgress = useFindManyUserClassProgress()
  const { mutate } = useUpsertUserClassProgress({optimisticUpdate: true})

  const data = getUserCLassProgress.data
    console.log(data);

  return (
      <>
          <div>Hello World</div>
          {data ? data.map(d => <div style={{color: "white"}}>{String(d.userId)}</div>) : " "}
          <input
              type="text"
              value={userId}
              onChange={handleInputChange}
              placeholder="Enter some text for user ID"
          />
          <button
              onClick={() =>
                  mutate({
                      where: {
                          id: 1
                      },
                      update: {
                          userId: userId
                      },
                      create: {
                          userId: userId,
                          classId: "bfdbr",
                          watched: false
                      }
                  })}>
              Submit
          </button>
      </>
  );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
