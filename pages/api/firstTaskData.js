export default function handler(req, res) {
  res.status(200).json({
    appData: {
      activeUsers: 6000,
      downloaded: 100000,
      reviews: 12000,
      awards: 9,
    },
    how: [
      'Create an Account. aliquid rerum velit animi sed perspiciatis minus quam rem quasi aspernatur repellat eum delectus obcaecati!',
      'Link your Bank Account. aliquid rerum velit animi sed perspiciatis minus quam rem quasi aspernatur repellat eum delectus obcaecati!',
      'Give me your Social Security Number. aliquid rerum velit animi sed perspiciatis minus quam rem quasi aspernatur repellat eum delectus obcaecati!',
    ],
    features: [
      {
        title: 'Send Money',
        desc: 'Send Money to Me. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt qui ab autem deleniti commodi consequuntur quibusdam sunt, quos fuga neque ut? Repudiandae, similique nemo non esse accusantium quis. Porro, velit.',
      },
      {
        title: 'Money Request',
        desc: 'Become your own loan shark. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt qui ab autem deleniti commodi consequuntur quibusdam sunt, quos fuga neque ut? Repudiandae, similique nemo non esse accusantium quis. Porro, velit.',
      },
      {
        title: 'Pay Bill',
        desc: 'Pay bills with the click of a finger. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt qui ab autem deleniti commodi consequuntur quibusdam sunt, quos fuga neque ut? Repudiandae, similique nemo non esse accusantium quis. Porro, velit.',
      },
      {
        title: 'Mobile Recharge',
        desc: 'Recharge your Mobile. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt qui ab autem deleniti commodi consequuntur quibusdam sunt, quos fuga neque ut? Repudiandae, similique nemo non esse accusantium quis. Porro, velit.',
      },
    ],
  });
}
