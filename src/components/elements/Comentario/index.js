import React from 'react';
import PropTypes from 'prop-types';
import {Anchorme} from 'react-anchorme';
import {Stack, Box, Text, Flex} from '@chakra-ui/layout';
import {Avatar} from '@chakra-ui/avatar';
import {TextAnchor} from './styles.js';

const Comentario = ({item} = {}) => {
  return (
    <Flex flexDirection="row" align="flex-start">
      <Box mr={{base: 2, lg: 4}}>
        <Avatar name={item.author?.name} src={item.author?.avatar} />
      </Box>
      <Box p={{base: 3, lg: 4}} background="#ddd" borderRadius="10px">
        <Stack direction="row" justifyContent="space-between">
          <Text mb={4} fontWeight="bold" fontSize="xs" color="black">
            {item.author?.name}
          </Text>
          <Text fontSize="xs" color="gray">
            {item.dateTime.fromNow()}
          </Text>
        </Stack>

        <TextAnchor size="sm" color="black" align="justify">
          <Anchorme target="_blank" rel="noreferrer noopener">
            {item.description}
          </Anchorme>
        </TextAnchor>
      </Box>
    </Flex>
  );
};

Comentario.displayName = 'Comentario';
Comentario.defaultProps = {
  item: {},
};
Comentario.propTypes = {
  item: PropTypes.shape({
    author: {
      id: PropTypes.string,
      name: PropTypes.string,
      avatar: PropTypes.string,
    },
    post: PropTypes.string,
    dateTime: PropTypes.object.isRequired, // TODO: invoke moment object type
    description: PropTypes.string,
  }),
};

export default Comentario;
