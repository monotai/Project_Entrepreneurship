import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
function Post(){
    return <>
            <div className='block_post'>
                <div className='user'>
                    <img src={reactLogo} alt='profile picture' className='profile_picture'></img>
                    <div className='profile_detail'>
                    <p>Vann Vat</p>
                    <p>Student 17/03/2025</p>
                    </div>
                </div>
                <div>
                    <h3>Question</h3>
                    <p>
                    Quora (note correct spelling) is a website that is designed for people to ask questions that other people can answer. Comments on the answers are a minor and optional feature on the site.<br /><br />
                    I am not sure what you mean by “some responders take their answers so personally.” But I will point out that since you are explicitly asking about opinions, the answers are necessarily people’s personal opinions.<br /><br />
                    “Not wanting to hear [alternative] opinions.” That part is easy. The answer author has no need to care about other opinions.<br /><br />
                    Here is a hypothetical. Someone asks a question that requests personal opinions. “Between Jethro Tull and the Partridge Family, which band produced better music, and why?” I decide to provide the personal opinion that the questioner is looking for. I choose one band or the other as my favorite, and give facts and arguments to support my choice.<br /><br />
                    Suppose someone with a different opinion posts a comment below my answer to say that the other band had better music. They are talking to the wrong person.<br /><br />
                    I am perfectly aware that other people will have different opinions, or will agree with my choice but for different reasons. They may even think that my reasons are wrong. That’s okay. But I don’t need to hear about it. Writing an answer on Quora is not the same as inviting people to join a discussion.<br /><br />
                    You know who does care? The person who wrote the question. They explicitly asked Quorans at large to provide their own opinions. They know that they might get lots of answers with different opinions—that is probably why they asked the question. They “want to hear alt opinions.” If someone has an opinion different than mine, they should write their own answer. That would be fulfilling Quora’s function of providing people with the information or opinions they asked for.<br /><br />
                    Don’t bother commenting on someone else’s answer just to tell them that you don’t agree with their opinion.
                    </p>
                </div>
                <div>
                    <input></input>
                </div>
            </div>
        </>
}

export default Post;