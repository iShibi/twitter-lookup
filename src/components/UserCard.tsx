import type { SingleUserLookupResponse } from 'twitter-types';

export function UserCard({ data, includes }: SingleUserLookupResponse) {
  return (
    <div className='rounded-lg border-transparent shadow-md bg-gray-900 text-white mt-14 py-4 px-5'>
      <div className='flex justify-center mb-6 select-none'>
        <img src={data.profile_image_url?.replace(/_normal\./, '.')} alt='user profile image' width='200px' className='rounded-full' />
      </div>
      <p><strong>Username</strong>: { data.username }</p>
      <p><strong>Id</strong>: { data.id }</p>
      <p><strong>Name</strong>: { data.name }</p>
      <p><strong>Location</strong>: { data.location }</p>
      <p><strong>Joined</strong>: { data.created_at && new Date(data.created_at).toUTCString() }</p>
      <p><strong>Tweets</strong>: { data.public_metrics?.tweet_count }</p>
      <p><strong>Followers</strong>: { data.public_metrics?.followers_count }</p>
      <p><strong>Following</strong>: { data.public_metrics?.following_count }</p>
      <p><strong>Verified</strong>: { data.verified ? '✔️' : '❌' }</p>
      <p><strong>Description</strong>: { data.description }</p>
    </div>
  )
}