
import SkeletonCard from '@/components/ui/SkeletonCard'
import React from 'react'

export default function Loading() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>{"abcdefghi".split('').map(i => (
      <SkeletonCard key={i} />
    ))}</div>
  )
}
